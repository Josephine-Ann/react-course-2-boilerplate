import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

export default class FlashcardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            putInUniversal: props.flashcard ? props.flashcard.putInUniversal : false,
            universal: props.flashcard ? props.flashcard.universal : '',
            title: props.flashcard ? props.flashcard.title : '',
            difficulty: props.flashcard ? props.flashcard.difficulty : '',
            englishone: props.flashcard ? props.flashcard.englishone : '',
            englishtwo: props.flashcard ? props.flashcard.englishtwo : '',
            englishthree: props.flashcard ? props.flashcard.englishthree : '',
            englishfour: props.flashcard ? props.flashcard.englishfour : '',
            englishfive: props.flashcard ? props.flashcard.englishfive : '',
            englishsix: props.flashcard ? props.flashcard.englishsix : '',
            englishseven: props.flashcard ? props.flashcard.englishseven : '',
            englisheight: props.flashcard ? props.flashcard.englisheight : '',
            englishnine: props.flashcard ? props.flashcard.englishnine : '',
            spanishone: props.flashcard ? props.flashcard.spanishone : '',
            spanishtwo: props.flashcard ? props.flashcard.spanishtwo : '',
            spanishthree: props.flashcard ? props.flashcard.spanishthree : '',
            spanishfour: props.flashcard ? props.flashcard.spanishfour : '',
            spanishfive: props.flashcard ? props.flashcard.spanishfive : '',
            spanishsix: props.flashcard ? props.flashcard.spanishsix : '',
            spanishseven: props.flashcard ? props.flashcard.spanishseven : '',
            spanisheight: props.flashcard ? props.flashcard.spanisheight : '',
            spanishnine: props.flashcard ? props.flashcard.spanishnine : '',
            createdAt: props.flashcard ? moment(props.flashcard.createdAt) : moment(),
            lastStudiedAt: props.flashcard ? moment(props.flashcard.lastStudiedAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        if (title.match(/^.{0,36}$/)) {
            this.setState(() => ({ title }));

        }
        console.log(this.state.putInUniversal)
    };
    onEnglishOneChange = (e) => {
        const englishone = e.target.value;
        if (englishone.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishone }));
        }
    };
    onEnglishTwoChange = (e) => {
        const englishtwo = e.target.value;
        if (englishtwo.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishtwo }));
        }
    };
    onEnglishThreeChange = (e) => {
        const englishthree = e.target.value;
        if (englishthree.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishthree }));
        }
    };
    onEnglishFourChange = (e) => {
        const englishfour = e.target.value;
        if (englishfour.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishfour }));
        }
    };
    onEnglishFiveChange = (e) => {
        const englishfive = e.target.value;
        if (englishfive.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishfive }));
        }
    };
    onEnglishSixChange = (e) => {
        const englishsix = e.target.value;
        if (englishsix.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishsix }));
        }
    };
    onEnglishSevenChange = (e) => {
        const englishseven = e.target.value;
        if (englishseven.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishseven }));
        }
    };
    onEnglishEightChange = (e) => {
        const englisheight = e.target.value;
        if (englisheight.match(/^.{0,36}$/)) {
            this.setState(() => ({ englisheight }));
        }
    };
    onEnglishNineChange = (e) => {
        const englishnine = e.target.value;
        if (englishnine.match(/^.{0,36}$/)) {
            this.setState(() => ({ englishnine }));
        }
    };
    onSpanishOneChange = (e) => {
        const spanishone = e.target.value;
        if (spanishone.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishone }));
        }
    };
    onSpanishTwoChange = (e) => {
        const spanishtwo = e.target.value;
        if (spanishtwo.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishtwo }));
        }
    };
    onSpanishThreeChange = (e) => {
        const spanishthree = e.target.value;
        if (spanishthree.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishthree }));
        }
    };
    onSpanishFourChange = (e) => {
        const spanishfour = e.target.value;
        if (spanishfour.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishfour }));
        }
    };
    onSpanishFiveChange = (e) => {
        const spanishfive = e.target.value;
        if (spanishfive.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishfive }));
        }
    };
    onSpanishSixChange = (e) => {
        const spanishsix = e.target.value;
        if (spanishsix.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishsix }));
        }
    };
    onSpanishSevenChange = (e) => {
        const spanishseven = e.target.value;
        if (spanishseven.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishseven }));
        }
    };
    onSpanishEightChange = (e) => {
        const spanisheight = e.target.value;
        if (spanisheight.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanisheight }));
        }
    };
    onSpanishNineChange = (e) => {
        const spanishnine = e.target.value;
        if (spanishnine.match(/^.{0,36}$/)) {
            this.setState(() => ({ spanishnine }));
        }
    };
    onDifficultyChange = (e) => {
        const difficulty = e.target.value;
        this.setState(() => ({ difficulty }));
    };
    onUniversalChange = (e) => {
        let universalBoolean = e.target.value
        universalBoolean = parseInt(universalBoolean, 10)
        universalBoolean = !!universalBoolean
        this.setState(() => ({ universal: universalBoolean }));
        this.setState(prevState => {
            return { putInUniversal: prevState && false }
        });
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.difficulty) {
            this.setState(() => ({ error: "Please give title and difficulty" }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
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
                putInUniversal: this.state.universal && false
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div className="difficulty-ranges-form">
                    <div>
                        <input type="radio" id="opteight" name="optstr" value="86400000" checked={this.state.difficulty === "86400000"} onChange={this.onDifficultyChange} />
                        <label> Easy </label>
                    </div>
                    <div>
                        <input type="radio" id="opteight" name="optstr" value="432000000" checked={this.state.difficulty === "432000000"} onChange={this.onDifficultyChange} />
                        <label> Medium </label>
                    </div>
                    <div>
                        <input type="radio" id="opteight" name="optstr" value="1036800000" onChange={this.onDifficultyChange} checked={this.state.difficulty === "1036800000"} />
                        <label> Difficult </label>
                    </div>
                </div>
                <div className="universal difficulty-ranges-form">
                    <div>
                        <input type="radio" id="not-universal" name="universal" value="0" checked={this.state.universal === false} onChange={this.onUniversalChange} disabled={this.state.universal} />
                        <label> Just for me </label>
                    </div>
                    <div>
                        <input type="radio" id="universal" name="universal" value="1" checked={this.state.universal === true} onChange={this.onUniversalChange} disabled={this.state.universal} />
                        <label> Share it! </label>
                    </div>
                </div>
                <p>Once shared, lists cannot be edited or deleted.</p>
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
                <input
                    type="test"
                    placeholder="English one"
                    className="text-input"
                    value={this.state.englishone}
                    onChange={this.onEnglishOneChange}
                />
                <input
                    type="test"
                    placeholder="Spanish one"
                    className="text-input"
                    value={this.state.spanishone}
                    onChange={this.onSpanishOneChange}
                />
                <input
                    type="test"
                    placeholder="English two"
                    className="text-input"
                    value={this.state.englishtwo}
                    onChange={this.onEnglishTwoChange}
                />
                <input
                    type="test"
                    placeholder="Spanish two"
                    className="text-input"
                    value={this.state.spanishtwo}
                    onChange={this.onSpanishTwoChange}
                />
                <input
                    type="test"
                    placeholder="English three"
                    className="text-input"
                    value={this.state.englishthree}
                    onChange={this.onEnglishThreeChange}
                />
                <input
                    type="test"
                    placeholder="Spanish three"
                    className="text-input"
                    value={this.state.spanishthree}
                    onChange={this.onSpanishThreeChange}
                />
                <input
                    type="test"
                    placeholder="English four"
                    className="text-input"
                    value={this.state.englishfour}
                    onChange={this.onEnglishFourChange}
                />
                <input
                    type="test"
                    placeholder="Spanish four"
                    className="text-input"
                    value={this.state.spanishfour}
                    onChange={this.onSpanishFourChange}
                />
                <input
                    type="test"
                    placeholder="English five"
                    className="text-input"
                    value={this.state.englishfive}
                    onChange={this.onEnglishFiveChange}
                />
                <input
                    type="test"
                    placeholder="Spanish five"
                    className="text-input"
                    value={this.state.spanishfive}
                    onChange={this.onSpanishFiveChange}
                />
                <input
                    type="test"
                    placeholder="English six"
                    className="text-input"
                    value={this.state.englishsix}
                    onChange={this.onEnglishSixChange}
                />
                <input
                    type="test"
                    placeholder="Spanish six"
                    className="text-input"
                    value={this.state.spanishsix}
                    onChange={this.onSpanishSixChange}
                />
                <input
                    type="test"
                    placeholder="English seven"
                    className="text-input"
                    value={this.state.englishseven}
                    onChange={this.onEnglishSevenChange}
                />
                <input
                    type="test"
                    placeholder="Spanish seven"
                    className="text-input"
                    value={this.state.spanishseven}
                    onChange={this.onSpanishSevenChange}
                />
                <input
                    type="test"
                    placeholder="English eight"
                    className="text-input"
                    value={this.state.englisheight}
                    onChange={this.onEnglishEightChange}
                />
                <input
                    type="test"
                    placeholder="Spanish eight"
                    className="text-input"
                    value={this.state.spanisheight}
                    onChange={this.onSpanishEightChange}
                />
                <input
                    type="test"
                    placeholder="English nine"
                    className="text-input"
                    value={this.state.englishnine}
                    onChange={this.onEnglishNineChange}
                />
                <input
                    type="test"
                    placeholder="Spanish nine"
                    className="text-input"
                    value={this.state.spanishnine}
                    onChange={this.onSpanishNineChange}
                />
                <div>
                    <button className="button">Save Flashcard</button>
                </div>
            </form>
        )
    }
}

