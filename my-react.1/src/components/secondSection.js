import React,{Component} from "react";
 import Wrench from '../images/Wrench.jpg';
 import Megaphone from '../images/Megaphone.jpg.jpg';
 import Knowledgehat from '../images/Knowledgehat.jpg.jpg'
class SecondSection extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="section">
            <div className="item">
                <div >
                    <img src = {Megaphone}/>
                    <hr/>
                </div>
                <h4>What is Famo.us?</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC,
                     making it over 2000 years old. Richard McClintock, a Latin professor
                      at Hampden-Sydney College in Virginia, looked up one of the more 
                      obscure Latin words, consectetur.</p>
            </div>
            <div className="item">
                 <div>
                 <img src = {Wrench}/>
                    <hr/>
                </div>
                <h4>Build your career</h4>
                <p>But I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a complete
                     account of the system, and expound the actual teachings of the great
                      explorer of the truth, the master-builder of human happiness. No one 
                      rejects, dislikes, or avoids pleasure itself.</p>
            </div>
            <div class="item">
                <div>
                <img src = {Knowledgehat}/>
                    <hr/>
                </div>
                <h4>Never stop learning</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                     praesentium voluptatum deleniti atque corrupti quos dolores et quas 
                     molestias excepturi sint occaecati cupiditate non provident, similique
                      sunt in culpa qui officia deserunt mollitia animi, id est laborum et 
                      dolorum fuga.</p>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
export default SecondSection;
