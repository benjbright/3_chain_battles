const main = async () => {
  try {
    const nftContractFactory = await ethers.getContractFactory("ChainBattles")
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()

    console.log(`Contract deployed to ${nftContract.address}`)
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()

// Contract deployed to Polygon Mumbai test network address:
// 0xDB7bdC6D6E8697E7A9E06a94daa430111E01b7e3
