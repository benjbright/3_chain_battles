# Alchemy Road to Web3 - Week 3 challenge - on chain NFT metadata

## Notes and key learning points

### Verify contracts

- run `@nomiclabs/hardhat-etherscan` to install etherscan
- get the etherscan api key and add to the `.env` file
- Note this is for the Polygon Mumbai test network
- run `npx hardhat verify -- network mumbai [contract address]`

### Challenge - week 3

- Store more data on the dynamic NFT
- Substitute the current tokenIdtoLevels[] mapping with a struct that stores:
  - Level
  - Speed
  - Strength
  - Life
- Once you have created the struct, initialize the stats in the mint() function
- To do this, look into pseudo-random number generation in Solidity (see link)
- Revise the dynamic NFT contract to add these properties and re-deploy
- Submit the updated smart contract to receive the PoK token

### Learning resources

- https://www.tutorialspoint.com/solidity/solidity_structs.htm
- https://blog.finxter.com/how-to-generate-random-numbers-in-solidity/
