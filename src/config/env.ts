export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
export const CHAIN_ID =
  parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? '', 10) ?? 80001;
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
export const PROJECT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_PROJECT_ID;
export const API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_CLOUD_PROJECT_PUBSUB_API_KEY;
export const GENERATOR_URL = process.env.GENERATOR_URL;
export const OPEN_MINTING = process.env.NEXT_PUBLIC_OPEN_MINTING;
export const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
export const MORALIS_API_ENDPOINT = 'https://deep-index.moralis.io/api/v2';
export const ALLOWED_WALLETS = process.env.NEXT_PUBLIC_ALLOWED_WALLETS
  ? (JSON.parse(process.env.NEXT_PUBLIC_ALLOWED_WALLETS) as string[])?.map(
      (w) => w.toLowerCase(),
    )
  : null;
export const RAT_EGG_BLUR =
  'data:image/png;base64,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';

/* Closet Settings */
export const RAT_PIECES_PREFIX = '/images/closet/pieces/';
export const RAT_PIECES_THUMBNAIL_PREFIX = '/images/closet/thumbnails/';
export const RAT_CLOSET_PLACEHOLDER = '/images/closet/rat-placeholder.png';
export const LAYER_ORDER = [
  'background',
  'tail',
  'ears',
  'hand',
  'color',
  'markings',
  'head',
  'generation',
  'snout',
  'torso',
  'shirt',
  'eyes',
  'glasses',
  'accessory',
  'hat',
  'pet',
  'hand',
];
export const LAYER_HAS_BASE = ['head', 'torso'];
export const CLOSET_PIECES = {
  shirt: [
    'none',
    'suit-black',
    'suit-navy',
    'tuxedo-pink',
    'blazer-brown-buttondown',
    'blazer-navy-tee',
    'robe-red',
    'sweater-orange',
    'scarf',
    'coat-cat-fur',
    'costume-pumpkin',
    'costume-squid-game',
    'sash-big-cheese',
    'costume-cat',
    'costume-vampire',
    'costume-candy-corn',
    'costume-superhero',
    'karate-white',
    'costume-ghost',
    'costume-fairy',
    'costume-witch',
    'jacket-leather',
  ],
  hat: [
    'none',
    'costume-pumpkin',
    'costume-scream-mask',
    'costume-squid-game',
    'tiara',
    'costume-cat',
    'costume-vampire',
    'costume-candy-corn',
    'karate-red',
    'costume-fairy',
    'costume-witch',
    'ballcap-baseball-one',
    'ballcap-baseball-two',
    'ballcap-baseball-three',
    'ballcap-baseball-four',
    'ballcap-sports',
    'ballcap-books',
    'ballcap-crafts',
    'headphones-rats-by-rats',
    'headphones-pods',
    'helicopter',
  ],
  snout: ['costume-vampire'],
  accessory: ['none', 'costume-cat', 'chain-gold'],
  glasses: ['none', 'costume-funny'],
  hand: [
    'none',
    'pumpkin-spice-latte',
    'champagne',
    'costume-ghost',
    'costume-fairy',
    'costume-witch',
    'super-cheezr',
  ],
  pet: ['none'],
};
export const TOTAL_CLOSET_PIECES = Object.values(CLOSET_PIECES).reduce(
  (prev, curr) => prev + curr.length,
  0,
);
export const FULLSTORY_ORG_ID = '15X2Y3';

/** Den Settings */
export const DEN_BACKGROUND = '/images/den/sewerbg.png';
export const DEN_FRAME_PREFIX = '/images/den/sewerframe-';
export const DEN_POSTER_PREFIX = '/images/den/sewerposter-';
export const NUM_FRAMES = 4;
export const NUM_POSTERS = 1;
export const denBgWidth = 2600;
export const denBgHeight = 1400;

/** IPFS Settings */
export const IPFSGateways = [
  'https://ipfs.io/ipfs/',
  'https://gateway.ipfs.io/ipfs/',
  'https://cloudflare-ipfs.com/ipfs/',
  'https://gateway.pinata.cloud/ipfs/',
  'https://ipfs.moralis.io:2053/ipfs/',
  'https://ipfs.infura.io/ipfs/',
  'https://ipfs.fleek.co/ipfs/',
  'https://ipfs.yt/ipfs/',
  'https://crustwebsites.net/ipfs/',
  'https://ipfs.tubby.cloud/ipfs/',
  'https://ipfs.eth.aragon.network/ipfs/',
  'https://ravencoinipfs-gateway.com/ipfs/',
  'https://ipfs.overpi.com/ipfs/',
];
