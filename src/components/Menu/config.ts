import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy Balloon',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x428a38a7bdca24cd22623bd427efc64077b56cc0',
      },
      {
        label: 'Add Balloon Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/ETH/0x428a38a7BdCa24CD22623bd427efC64077b56cC0',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Tanks',
    icon: 'PoolIcon',
    href: '/tanks',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x428a38a7bdca24cd22623bd427efc64077b56cc0',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x428a38a7bdca24cd22623bd427efc64077b56cc0',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/deflate-finance",
      },
      {
        label: "Docs",
        href: "https://deflatefi.gitbook.io/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@deflatefi",
      },
    ],
  },
]

export default config
