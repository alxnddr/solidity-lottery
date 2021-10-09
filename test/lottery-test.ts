import { expect } from "chai";

import { ethers } from "hardhat";

const setupLottery = async () => {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();
  await lottery.deployed();

  return lottery;
};

describe("Lottery", function () {
  it("sets performer of deploy transaction to be a manager", async () => {
    const lottery = await setupLottery();
    expect(await lottery.manager()).to.equal(lottery.deployTransaction.from);
  });

  it("should fail when entering a lottery with less than 0.01 ether", async () => {
    const lottery = await setupLottery();
    const [, participantAddress] = await ethers.getSigners();

    const enterTransaction = lottery
      .connect(participantAddress)
      .enter({ value: ethers.utils.parseEther("0.009") });

    await expect(enterTransaction).to.be.revertedWith(
      "minimum amount of 0.01 ether is required"
    );
  });

  it("picking winner should fail when executed by non-managers", async () => {
    const lottery = await setupLottery();
    const [, participantAddress1, participantAddress2] =
      await ethers.getSigners();

    await Promise.all(
      [participantAddress1, participantAddress2].map(
        async (address) =>
          await lottery
            .connect(address)
            .enter({ value: ethers.utils.parseEther("0.02") })
      )
    );

    const pickWinnerTransaction = lottery
      .connect(participantAddress1)
      .pickWinner();

    await expect(pickWinnerTransaction).to.be.revertedWith(
      "only the manager can perform this action"
    );
  });

  it("picking winner should fail when there are no participants", async () => {
    const lottery = await setupLottery();

    const pickWinnerTransaction = lottery.pickWinner();

    await expect(pickWinnerTransaction).to.be.revertedWith(
      "lottery requires at least two participants"
    );
  });

  it("transfers all balance to a winner and resets the contract state", async () => {
    const lottery = await setupLottery();

    const [, participantAddress1, participantAddress2] =
      await ethers.getSigners();

    await Promise.all(
      [participantAddress1, participantAddress2].map(
        async (address) =>
          await lottery
            .connect(address)
            .enter({ value: ethers.utils.parseEther("1") })
      )
    );

    await lottery.pickWinner();

    const participantBalance1 = await participantAddress1.getBalance();
    const participantBalance2 = await participantAddress2.getBalance();

    const balancesDifference = participantBalance1
      .sub(participantBalance2)
      .abs();

    expect(balancesDifference.gt(ethers.utils.parseEther("1.9"))).to.be.true;
    expect(await lottery.getPlayers()).to.be.empty;
  });
});
