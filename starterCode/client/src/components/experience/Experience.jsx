import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = () => {

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {[1,2,3].map((dummyValue)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 10/05/2020 - 10/05/2021
                        </p>
                        <h3 className="card-text2">Intermediate</h3>
                        <p className="card-text3">learned python coding</p>
                        <p className="card-text4">
                        XYZ school
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2022 - March 2023
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learnt minting and mining in blockchain</p>
                        <p className="card-text4">
                            Coder
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2023 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned defi</p>
                        <p className="card-text4">
                            Coder
                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> November 2023 - Present
                        </p>
                        <h3 className="card-text2">cloud computer</h3>
                        <p className="card-text3">learned cloud computing basics</p>
                        <p className="card-text4">
                            Coder
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
