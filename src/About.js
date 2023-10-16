import img from './components/images/sruthiimg1.jpg'

function About(){
    return(
        <div className="about_div">
            <p className="about">My name is Sruthi.Iam currently pursuing B.Tech from Vellore Institute of Technology,Amaravati.Iam a passionate engineer and would love to solve real world problems using my technical skills.I wish to gain knowledge and implement the knowledge in solving industrial problems.</p>
            <img className="about-image" height={200} src={img} alt="img not found"/>
        </div>
    )
}
export default About;