import React,{Component} from 'react';
import './styles.css'

class Stars extends React.Component {
    render(){
        return(
            <div>
                <div className = "star-six "></div>
                <div className = "star-six space"></div>
                <div className = "star-six space"></div>
                <div className = "star-six space"></div>
                <div className = "star-six space"></div>
            </div>
    );
  }
}
export default Stars