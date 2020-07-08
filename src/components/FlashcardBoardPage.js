import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startEditFlashcard } from '../actions/flashcards';
import NotificationModal from './NotificationModal'
import FinishedModal from './FinishedModal'


export class FlashcardBoardPage extends React.Component {
    constructor(props) {
        super(props); 
          this.state = {
            difficulty: props.flashcard ? props.flashcard.difficulty : '',
            lastStudiedAt: moment(props.flashcard.lastStudiedAt),
            id: props.flashcard ? props.flashcard.id : '',
            isFlipped: [],
            cardInAction: null,
            sequenceRunning: false,
            mainCardBeingPlayed: "1",
            i: 0,
            j: 1,
            speed: null,
            checked: [1],
            secondTime: null,
            modalOpen: null,
            modalOpenFinished: null
        };
    }
    onStart = () => {

        let timer = parseInt(this.state.speed, 10)
        let incrementer = parseInt(this.state.speed, 10)

        this.state.i += parseInt(this.state.mainCardBeingPlayed, 10)

        this.setState({ sequenceRunning: true })
        this.setState({ cardInAction: this.state.mainCardBeingPlayed })

        let totalRepetitionsOfLoop
        this.state.i === 1 ? totalRepetitionsOfLoop = 10 : totalRepetitionsOfLoop = 9    

        for (this.state.i = 1; this.state.i < totalRepetitionsOfLoop; this.state.i++) {    

            setTimeout(() => {
                this.setState({ cardInAction: this.state.j.toString(10) })
            }, timer);

            timer += incrementer   

            setTimeout(() => {

                this.state.j += 1
                this.state.j === parseInt(this.state.mainCardBeingPlayed, 10) ? this.state.j += 1 : this.state.j += 0
                this.setState({ cardInAction: this.state.mainCardBeingPlayed  })

            }, timer);

            timer += incrementer
    }

    setTimeout(() => {

        this.state.secondTime += 1
        if (this.state.secondTime === 1) {
            this.setState({ modalOpen: true })
        }
        this.setState({ sequenceRunning: false })

        this.setState({ i: 0  })

        this.setState({ j: 1  })

        if (this.state.secondTime % 2) {

            this.setState({ isFlipped:  this.state.isFlipped.concat(parseInt(this.state.mainCardBeingPlayed, 10)) })

        } else if (this.state.secondTime % 2 === 0) {
            this.setState({ checked: this.state.checked.concat(parseInt(this.state.mainCardBeingPlayed, 10) + 1) })
            let mainCardBeingPlayedCopy = parseInt(this.state.mainCardBeingPlayed, 10)
            mainCardBeingPlayedCopy += 1
            mainCardBeingPlayedCopy = mainCardBeingPlayedCopy.toString(10)
            this.setState({ mainCardBeingPlayed: mainCardBeingPlayedCopy })
        }
    }, timer);
    if (this.state.secondTime === 17) {
        this.props.startEditFlashcard(this.props.flashcard.id, { lastStudiedAt: Date.now() });
    } 

    timer += incrementer;

    setTimeout(() => {
 
    if (this.state.secondTime === 18 && this.state.sequenceRunning === false) {
        this.setState({ modalOpenFinished: true })
    } 
    }, timer);
};
onClickFlipOne = () => {
    if (!this.state.isFlipped.includes(1)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(1) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 1) })
    }
}
onClickFlipTwo = () => {
    if (!this.state.isFlipped.includes(2)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(2) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 2) })
    }
}
onClickFlipThree = () => {
    if (!this.state.isFlipped.includes(3)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(3) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 3) })
    }
}
onClickFlipFour = () => {
    if (!this.state.isFlipped.includes(4)) {
    this.setState({ isFlipped:  this.state.isFlipped.concat(4) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 4) })
    }
}
onClickFlipFive = () => {
    if (!this.state.isFlipped.includes(5)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(5) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 5) })
    }
}
onClickFlipSix = () => {
    if (!this.state.isFlipped.includes(6)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(6) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 6) })
    }
}
onClickFlipSeven = () => {
    if (!this.state.isFlipped.includes(7)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(7) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 7) })
    }
}
onClickFlipEight = () => {
    if (!this.state.isFlipped.includes(8)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(8) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 8) })
    }
}
onClickFlipNine = () => {
    if (!this.state.isFlipped.includes(9)) {
        this.setState({ isFlipped:  this.state.isFlipped.concat(9) })
    } else {
        this.setState({ isFlipped:  this.state.isFlipped.filter(card => card !== 9) })
    }
}
onStartLocChange = (e) => {

    this.setState({ mainCardBeingPlayed: e.target.value })
    this.setState({ checked: parseInt(e.target.value, 10) })

}
onSpeedChange = (e) => {
    this.setState({ speed: e.target.value })
}
onDifficultyChange = (e) => {
    this.setState({ difficulty: e.target.value })
    this.props.startEditFlashcard(this.props.flashcard.id, { difficulty: e.target.value });
}
clearStateCloseModal = () => {
    this.setState(() => ({ modalOpen: null  }));
  }
  onFinish = () => {
    this.setState(() => ({ modalOpenFinished: null  }));
    this.props.history.push('/');
  }
render() {
    return (
        <div>
        {(typeof this.state.secondTime !== "number" ) && <p className="para-instruc-start">Program your speed below, hit start and say the word in English when the card flashes grey!</p>}
        {(this.state.secondTime) && <p className="para-instruc-start">Continue to say the word in English, even though you see it in Spanish!</p>}
        <div className="page">
        <div className="grid">
        <div className="row">
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(1) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "1" && this.state.sequenceRunning === true  ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"} onClick={this.onClickFlipOne}><p>{this.props.flashcard.englishone}</p></div>
            <div className={this.state.cardInAction === "1" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"}  onClick={this.onClickFlipOne}><p>{this.props.flashcard.spanishone}</p></div>
            </div>
            </div>
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(2) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "2" && this.state.sequenceRunning === true  ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipTwo}><p>{this.props.flashcard.englishtwo}</p></div>
            <div className={this.state.cardInAction === "2" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipTwo}><p>{this.props.flashcard.spanishtwo}</p></div>
            </div>
            </div>
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(3) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "3" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipThree}><p>{this.props.flashcard.englishthree}</p></div>
            <div className={this.state.cardInAction === "3" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipThree}><p>{this.props.flashcard.spanishthree}</p></div>
            </div>
            </div>
            </div>
        <div className="row">
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(4) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "4" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipFour}><p>{this.props.flashcard.englishfour}</p></div>
            <div className={this.state.cardInAction === "4" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipFour}><p>{this.props.flashcard.spanishfour}</p></div>
            </div>
            </div>
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(5) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "5" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipFive}><p>{this.props.flashcard.englishfive}</p></div>
            <div className={this.state.cardInAction === "5" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipFive}><p>{this.props.flashcard.spanishfive}</p></div>
            </div>
            </div>
            <div className="scene scene--card">
            <div className={this.state.isFlipped.includes(6) ? "card is-flipped" : "card"}>
            <div className={this.state.cardInAction === "6" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipSix}><p>{this.props.flashcard.englishsix}</p></div>
            <div className={this.state.cardInAction === "6" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipSix}><p>{this.props.flashcard.spanishsix}</p></div>
            </div>
            </div>
        </div>
        <div className="row">
        <div className="scene scene--card">
        <div className={this.state.isFlipped.includes(7) ? "card is-flipped" : "card"}>
        <div className={this.state.cardInAction === "7" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipSeven}><p>{this.props.flashcard.englishseven}</p></div>
        <div className={this.state.cardInAction === "7" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipSeven}><p>{this.props.flashcard.spanishseven}</p></div>
        </div>
        </div>
        <div className="scene scene--card">
        <div className={this.state.isFlipped.includes(8) ? "card is-flipped" : "card"}>
        <div className={this.state.cardInAction === "8" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipEight}><p>{this.props.flashcard.englisheight}</p></div>
        <div className={this.state.cardInAction === "8" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipEight}><p>{this.props.flashcard.spanisheight}</p></div>
        </div>
        </div>
        <div className="scene scene--card">
        <div className={this.state.isFlipped.includes(9) ? "card is-flipped" : "card"}>
        <div className={this.state.cardInAction === "9" && this.state.sequenceRunning === true ? "card__face card__face--front keyFrameDiv" : "card__face card__face--front"}  onClick={this.onClickFlipNine}><p>{this.props.flashcard.englishnine}</p></div>
        <div className={this.state.cardInAction === "9" && this.state.sequenceRunning === true ? "card__face card__face--back keyFrameDiv" : "card__face card__face--back"} onClick={this.onClickFlipNine}><p>{this.props.flashcard.spanishnine}</p></div>
        </div>
        </div>
        </div>
        <div className="difficulty-ranges-desktop">
        <div>
        <input type="radio" id="opteight" name="diffstr" value="86400000" checked={this.state.difficulty === "86400000"}  onChange={this.onDifficultyChange}/>
        <label> Study every 12 days </label>
        </div>
        <div>
        <input type="radio" id="opteight" name="diffstr" value="432000000" checked={this.state.difficulty === "432000000"} onChange={this.onDifficultyChange}/>
        <label> Study every 5 days </label>
        </div>
        <div>
        <input type="radio" id="opteight" name="diffstr" value="1036800000" checked={this.state.difficulty === "1036800000"} onChange={this.onDifficultyChange}/>
        <label> Study every day </label>
        </div>
        </div>
        </div>
        <div className="ranges">
        <h1>Settings</h1>
        <p>Program your speed and hit start</p>
        <div>
        <input type="radio" id="1" name="speed" value="950" onChange={this.onSpeedChange} disabled={this.state.sequenceRunning}/>
        <label> Slow speed</label><br/>
        </div>
        <div>
        <input type="radio" id="2" name="speed" value="600" onChange={this.onSpeedChange} disabled={this.state.sequenceRunning}/>
        <label> Medium speed</label><br/>
        </div>
        <div>
        <input type="radio" id="3" name="speed" value="450" onChange={this.onSpeedChange} disabled={this.state.sequenceRunning}/>
        <label> Fast speed</label><br/>
        </div>
        <p className={"titles-instru"}>Your progress</p>
            <div className="radio-button-container">
            <div className="radio-starting-point">
            <input type="checkbox" id="optone" name="optstr" value="1" checked={this.state.checked.includes(2)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishone} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="opttwo" name="optstr" value="2" checked={this.state.checked.includes(3)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishtwo} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optthree" name="optstr" value="3" checked={this.state.checked.includes(4)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishthree} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optfour" name="optstr" value="4" checked={this.state.checked.includes(5)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishfour} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optfive" name="optstr" value="5" checked={this.state.checked.includes(6)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishfive} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optsix" name="optstr" value="6" checked={this.state.checked.includes(7)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishsix} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optseven" name="optstr" value="7" checked={this.state.checked.includes(8)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishseven} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="opteight" name="optstr" value="8" checked={this.state.checked.includes(9)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanisheight} </label>
            </div>
            <div className="radio-starting-point">
            <input type="checkbox" id="optnine" name="optstr" value="9" checked={this.state.checked.includes(10)} onChange={this.onStartLocChange} disabled={true}/>
            <label> {this.props.flashcard.spanishnine} </label>
            </div>
            </div>
            <button onClick={this.onStart} disabled={!this.state.speed || !this.state.mainCardBeingPlayed || this.state.sequenceRunning}>Start</button><br/>
            <div className="difficulty-ranges-mobile">
            <div>
            <input type="radio" id="opteight" name="diffstrr" value="86400000" checked={this.state.difficulty === "86400000"}  onChange={this.onDifficultyChange}/>
            <label> Study every 12 days </label>
            </div>
            <div>
            <input type="radio" id="opteight" name="diffstrr" value="432000000" checked={this.state.difficulty === "432000000"} onChange={this.onDifficultyChange}/>
            <label> Study every 5 days </label>
            </div>
            <div>
            <input type="radio" id="opteight" name="diffstrr" value="1036800000" checked={this.state.difficulty === "1036800000"} onChange={this.onDifficultyChange}/>
            <label> Study every day </label>
            </div>
            </div>
            </div>
            <div>
        </div>
        </div>
        <FinishedModal
        modalOpenFinished={this.state.modalOpenFinished}
        clearStateCloseModalFinished={this.clearStateCloseModalFinished}
        onFinish={this.onFinish}
        />
        <NotificationModal
                    modalOpen={this.state.modalOpen}
                    clearStateCloseModal={this.clearStateCloseModal}
                    />
        </div>
        )
    }
};
const mapStateToProps = (state, props) => ({
    flashcard: state.flashcards.find((flashcard) => flashcard.id === props.match.params.id ),
    flashcardsuniversal: state.flashcardsuniversal.find((flashcard) => flashcard.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch) => ({
    startEditFlashcard: (id, flashcard) => dispatch(startEditFlashcard(id, flashcard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardBoardPage);
