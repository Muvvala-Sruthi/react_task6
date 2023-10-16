import img from './components/images/sruthiimg1.jpg'
function Home(){
    return(
        <div className="home">
            <h1>Iam Sruthi</h1>
            <h2>Iam a full stack developer</h2>
            <h2>"Dream chaser,Achieving the dreams with lot of commitment"</h2>
            <img className="image" height={200} src={img} alt="img not found"/>
        </div>
    )
}
export default Home;