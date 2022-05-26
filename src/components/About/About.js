import '../../styles/variables.css'
import  Giphy from '../../assets/About/giphy1.png'
import './About.css'

function About(){
    return(
        <div className='AboutBody'>
            <div className='About-img'>
                <img alt='img-abt' src={Giphy}></img>
            </div>
            <div className='About-desc'>
              <div className='About-heading'>
                About
              </div>
              <div className='About-content'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
              </div>
            </div>
        </div>
    );
}

function AboutBody() {
  return (
    <div>
      <About/>
    </div>
  );
}
export default AboutBody