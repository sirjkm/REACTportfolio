import LogoTitle from '../../assets/images/logo-j.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 's', 'o', 'n']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _13`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters letterClass={letterClass} 
                            strArray={nameArray} idx={15} />
                    <br />
                        <AnimatedLetters letterClass={letterClass} 
                            strArray={jobArray} idx={25} />
                </h1>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;