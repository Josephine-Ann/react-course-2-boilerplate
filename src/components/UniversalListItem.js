import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';

export class UniversalListItem extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            id: props.id,
            universal: true,
            title: props.title,
            difficulty: props.difficulty,
            createdAt: moment(props.createdAt),
            englishone: props.englishone,
            englishtwo: props.englishtwo,
            englishthree: props.englishthree,
            englishfour: props.englishfour,
            englishfive: props.englishfive,
            englishsix: props.englishsix,
            englishseven: props.englishseven,
            englisheight: props.englisheight,
            englishnine: props.englishnine,
            spanishone: props.spanishone,
            spanishtwo: props.spanishtwo,
            spanishthree: props.spanishthree,
            spanishfour: props.spanishfour,
            spanishfive: props.spanishfive,
            spanishsix: props.spanishsix,
            spanishseven: props.spanishseven,
            spanisheight: props.spanisheight,
            spanishnine: props.spanishnine,
            lastStudiedAt: 0,
            putInUniversal: 1
        };
    }
    onClick = () => {
            this.props.onClick({
                universal: this.state.universal,
                title: this.state.title,
                lastStudiedAt: this.state.lastStudiedAt.valueOf(),
                difficulty: this.state.difficulty,
                createdAt: this.state.createdAt.valueOf(),
                englishone: this.state.englishone,
                englishtwo: this.state.englishtwo,
                englishthree: this.state.englishthree,
                englishfour: this.state.englishfour,
                englishfive: this.state.englishfive,
                englishsix: this.state.englishsix,
                englishseven: this.state.englishseven,
                englisheight: this.state.englisheight,
                englishnine: this.state.englishnine,
                spanishone: this.state.spanishone,
                spanishtwo: this.state.spanishtwo,
                spanishthree: this.state.spanishthree,
                spanishfour: this.state.spanishfour,
                spanishfive: this.state.spanishfive,
                spanishsix: this.state.spanishsix,
                spanishseven: this.state.spanishseven,
                spanisheight: this.state.spanisheight,
                spanishnine: this.state.spanishnine,
                putInUniversal: this.state.putInUniversal + 1
             })
        }
    render () {
        return (  
            <div className={"list-item"}>
                    <Link to={`/universalboard/${this.state.id}`}>
                        <h3 className={"list-item__title" }>{this.state.title}</h3>
                        <span className={"list-item__sub-title" }>{moment(this.state.createdAt).format('MMMM Do, YYYY')}</span>
                    </Link>
                    <div className={"list-item__data"}>
                    <button className={"add-button"} onClick={this.onClick}>Add to my list</button>
                        </div>
                    </div>
                )
        }
    }
                
    export default UniversalListItem