import { Users, Rocket, Building2, Globe } from 'lucide-react'
import {
	binance,
	bpi,
	ledger,
	ripple,
	scaleway,
	solana,
	starknet
} from '@/public'
import { LinkedIn } from '@/components/svg/linkedin'
import { Twitter } from '@/components/svg/twitter'
import { Discord } from '@/components/svg/discord'
import { Email } from '@/components/svg/email'
import { YouTube } from '@/components/svg/youtube'
import { Zealy } from '@/components/svg/zealy'

export const stats = [
	{ label: "Members", value: 2063, icon: Users },
	{ label: "Countries", value: "30+", icon: Globe },
	{ label: "Projects", value: "20+", icon: Rocket },
	{ label: "Partners", value: "10+", icon: Building2 },
]

export const navLinks = [
	{ label: "Home", href: "/#hero" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
	{ label: "Events", href: "/events" },
]

export const partnerLogos = [
	{ logo: binance, alt: 'Binance' },
	{ logo: bpi, alt: 'BPI' },
	{ logo: ledger, alt: 'Ledger' },
	{ logo: ripple, alt: 'Ripple' },
	{ logo: scaleway, alt: 'Scaleway' },
	{ logo: solana, alt: 'Solana' },
	{ logo: starknet, alt: 'Starknet' }
]

export const socialLinks = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/42blockchain/",
		icon: <LinkedIn />,
	},
	{
		label: "Twitter",
		href: "https://twitter.com/42Blockchain_",
		icon: <Twitter />,
	},
	{
		label: "Discord",
		href: "https://discord.gg/2NKXT7X8pe",
		icon: <Discord />,
	},
	{
		label: "Email",
		href: "mailto:info@42blockchain.com",
		icon: <Email />,
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/@42blockchain",
		icon: <YouTube />,
	},
	{
		label: "Zealy",
		href: "https://zealy.io/c/42blockchain",
		icon: <Zealy />,
	},
]


export const eventsList = [
	{
		id: 25,
		title: "Solana Dev Series 5/5",
		date: "03/2025",
		description: "",
		image: "/event/solana_dev_series_part_5.jpeg",
		link: "https://x.com/SuperteamFRANCE/status/1892997719591133574"
	},
	{
		id: 24,
		title: "Solana Dev Series 2/5",
		date: "02/2025",
		description: "",
		image: "/event/solana_dev_series_part_2.jpeg",
		link: "https://x.com/SuperteamFRANCE/status/1883515101459665057"
	},
	{
		id: 23,
		title: "Kiln Hackathon",
		date: "02/2025",
		description: "5 prizes won by our members at the Kiln Hackathon, over 50 of our members participated",
		image: "/event/kiln_hackathon.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7297939020255248385"
	},
	{
		id: 22,
		title: "Starknet Winter Hackathon Build Station",
		date: "01/2025",
		description: "",
		image: "/event/starknet_winter_hackathon.png",
	},
	{
		id: 21,
		title: "Starknet Berlin Hackathon at 42 Berlin",
		date: "12/2024",
		description: "42Blockchain organized and hosted the Starknet Berlin Hackathon at 42 Berlin",
		image: "/event/starknet_berlin_hackathon.jpeg",
		link: "https://x.com/mihej_eth/status/1863979581906072042"
	},
	{
		id: 20,
		title: "AI Agents Night with Solana",
		date: "11/2024",
		description: "Over 130 passionate participants gathered for our AI Agent Night with Solana Superteam France 🇫🇷, an unforgettable evening of innovation, learning, and building! ✨",
		image: "/event/solana_ai_agent.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7290652292029063170"
	},
	{
		id: 19,
		title: "ETH Global Hackathon Bangkok",
		date: "11/2024",
		description: "",
		image: "/event/eth_global_bangkok.png",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7270068330902798337"
	},
	{
		id: 18,
		title: "Algorand Hackathon",
		date: "11/2024",
		description: "42Blockchain organized and hosted the Algorand France Hackathon at 42 Paris, $20.000 in prizes",
		image: "/event/algorand_hackathon.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7259603572533727234"
	},
	{
		id: 17,
		title: "Kiln Conference",
		date: "11/2024",
		description: "",
		image: "/event/kiln_conference.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7264296882028351488"
	},
	{
		id: 16,
		title: "ICP Online Workshop",
		date: "11/2024",
		description: "",
		image: "/event/icp_workshop.jpeg",
	},
	{
		id: 15,
		title: "How to win a Hackathon : Online Workshop",
		date: "11/2024",
		description: "",
		image: "/event/workshop_web3_hackathon.jpeg",
	},
	{
		id: 14,
		title: "Solana Pitch Deck Workshop",
		date: "11/2024",
		description: "",
		image: "/event/solana_pitch.jpeg",
	},
	{
		id: 13,
		title: "EthGlobal Hackathon Singapore",
		date: "10/2024",
		description: "Over $30.000 won at ETHGlobal Singapore Hackathon, new record beaten! 🎯",
		image: "/event/eth_global_singapore.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7245030753032450049"
	},
	{
		id: 12,
		title: "Singapore Token2049 & Solana Breakpoint",
		date: "10/2024",
		description: "",
		image: "/event/singapore.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7245357834886877185"
	},

	{
		id: 11,
		title: "Solana Rust Bootcamp",
		date: "09/2024",
		description: "",
		image: "/event/solana_rust_bootcamp.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 10,
		title: "Solana Colosseum Opening at 42 Tokyo",
		date: "09/2024",
		description: "",
		image: "/event/solana_colosseum_opening_tokyo.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7240360835150204928"
	},
	{
		id: 9,
		title: "Solana Colosseum Opening at 42 Paris",
		date: "09/2024",
		description: "",
		image: "/event/solana_colosseum_opening.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7237397743537696768"
	},
	{
		id: 8,
		title: "EthGlobal Hackathon Brussels",
		date: "07/2024",
		description: "",
		image: "/event/eth_global_brussels.jpg",
		link: "	https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 7,
		title: "EthCC Brusells",
		date: "07/2024",
		description: "",
		image: "/event/ethcc_brussels.jpg",
		link: "	https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 6,
		title: "Starknet Hackathon Build Station",
		date: "06/2024",
		description: "",
		image: "/event/starknet_build_station.jpeg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 5,
		title: "Starknet Bootcamp",
		date: "05/2024",
		description: "",
		image: "/event/starknet_bootcamp.jpg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 4,
		title: "Station F Visit",
		date: "04/2024",
		description: "We organized a visit to Station F, the largest startup campus in Europe, with a dozen of our members",
		image: "/event/station_f.jpg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 3,
		title: "Paris Blockchain Week Hackathon",
		date: "04/2024",
		description: "Both Prizes of the Hackathon were won by our members, over 20 of our members participated on the 100 present that weekend",
		image: "/event/pbw_hackathon.jpg",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7239567512693059584"
	},
	{
		id: 2,
		title: "Solidity Bootcamp",
		date: "03/2024",
		description: "",
		image: "/event/solidity_workshop.jpg",
	},
	{
		id: 1,
		title: "42Blockchain Reborn Event",
		date: "03/2024",
		description: "Our first event, where we reborned the 42Blockchain student union at 42 Paris with 80+ students",
		image: "/event/solidity_workshop_2.jpg",
	},
]
