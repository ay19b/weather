import {GiGamepad} from 'react-icons/gi'
import {FiPlay} from 'react-icons/fi'
import {AiOutlineUser }from 'react-icons/ai'
import {FiHeadphones} from 'react-icons/fi'
import {CgDisplaySpacing} from 'react-icons/cg'
import {MdCameraRoll} from 'react-icons/md'
import Battle from '../../images/battle.jpg'
import Flight from '../../images/flight.jpg'
import absent from '../../images/abse.jpg'

export const Nav=[
    {
        id:1,
        name:'GAME PASS',
        icon:<MdCameraRoll />
    },
    {
        id:2,
        name:'GAMES',
        icon:<GiGamepad />
    },
    {
        id:3,
        name:'CONSOLES',
        icon:<CgDisplaySpacing />
    },
    {
        id:4,
        name:'ACCESSORIES',
        icon:<FiHeadphones />
    },
    {
        id:5,
        name:'PLAY',
        icon:<FiPlay />
    },
    {
        id:6,
        name:'SIGN IN',
        icon:<AiOutlineUser />
    }
]


export const Data=[
    {
        id:1,
        img:absent,
        header:"The Ascent",
        desc:"Play now with Xbox Game Pass or purchase",
        btn:"GET IT NOW ",
    },
    {
        id:2,
        img:Battle,
        header:"Battlefield™ 2042",
        desc:"Pre-order now and put boots on the ground early",
        btn:"PRE-ORDER NOW",
    },
    {
        id:3,
        img:Flight,
        header:"Microsoft Flight Simulator",
        desc:"Play with Xbox Game Pass for PC or Ultimate",
        btn:"GET IT NOW",
    },
]
