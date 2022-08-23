import React, { Component } from "react";
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


// Sounds
import w from '../assets/tom-1.mp3';
import a from '../assets/tom-2.mp3';
import s from '../assets/tom-3.mp3';
import d from '../assets/tom-4.mp3';
import j from '../assets/snare.mp3';
import k from '../assets/crash.mp3';
import l from '../assets/kick-bass.mp3';


class Drumkit extends Component {

    constructor(props) {

        super(props);

        this.state = {
            w: false,
            a: false,
            s: false,
            d: false,
            j: false,
            k: false,
            l: false,
        };

        this.handleKeyW = this.handleKeyW.bind(this);
        this.handleKeyA = this.handleKeyA.bind(this);
        this.handleKeyS = this.handleKeyS.bind(this);
        this.handleKeyD = this.handleKeyD.bind(this);
        this.handleKeyJ = this.handleKeyJ.bind(this);
        this.handleKeyK = this.handleKeyK.bind(this);
        this.handleKeyL = this.handleKeyL.bind(this);


    }



    handleKeyW(event) {
        if (event.key === "w") {
            let tom = new Audio(w);
            tom.play();
            this.setState({ w: true})
        
        }


    }

    handleKeyA(event) {
        if (event.key === "a") {
            let tom2 = new Audio(a);
            tom2.play()
            this.setState({ a: true})
        }
    }

    handleKeyS(event) {
        if (event.key === "s") {
            let tom3 = new Audio(s);
            tom3.play()
            this.setState({ s: true})
        }
    }

    handleKeyD(event) {
        if (event.key === "d") {
            let tom4 = new Audio(d);
            tom4.play();
            this.setState({ d: true})
        }
    }

    handleKeyJ(event) {
        if (event.key === "j") {
            let snare = new Audio(j);
            snare.play();
            this.setState({ j: true})
        }
    }

    handleKeyK(event) {
        if (event.key === "k") {
            let crash = new Audio(k);
            crash.play();
            this.setState({ k: true})
        }
    }

    handleKeyL(event) {
        if (event.key === "l") {
            let kickBass = new Audio(l);
            kickBass.play();
            this.setState({ l: true})
        }
    }


    componentDidMount() {


        window.addEventListener('keydown', this.handleKeyS);
        window.addEventListener('keydown', this.handleKeyA);
        window.addEventListener('keydown', this.handleKeyW);
        window.addEventListener('keydown', this.handleKeyD);
        window.addEventListener('keydown', this.handleKeyL);
        window.addEventListener('keydown', this.handleKeyK);
        window.addEventListener('keydown', this.handleKeyJ);
    }

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeyS);
        window.removeEventListener('keydown', this.handleKeyA);
        window.removeEventListener('keydown', this.handleKeyW);
        window.removeEventListener('keydown', this.handleKeyD);
        window.removeEventListener('keydown', this.handleKeyL);
        window.removeEventListener('keydown', this.handleKeyK);
        window.removeEventListener('keydown', this.handleKeyJ);
    }


    render(

    ) {
            let w = this.state.w;
            let a = this.state.a;
            let s = this.state.s;
            let d = this.state.d;
            let j = this.state.j;
            let k = this.state.k;
            let l = this.state.l;

        return (
            <>
                <h1 id="title">Drum 🥁 Kit</h1>
                <div class="set">
                    <button class={`w drum ${w? " pressed":""}`} onKeyDown={this.handleKeyW } onAnimationEnd={() => this.setState({ w: false })}>w</button>
                    <button class={`a drum ${a? " pressed":""}`} onKeyDown={this.handleKeyA} onAnimationEnd={() => this.setState({ a: false })}>a</button>
                    <button class={`s drum ${s? " pressed":""}`} onKeyDown={this.handleKeyS} onAnimationEnd={() => this.setState({ s: false })}>s</button>
                    <button class={`d drum ${d? " pressed":""}`} onKeyDown={this.handleKeyD} onAnimationEnd={() => this.setState({ d: false })}>d</button>
                    <button class={`j drum ${j? " pressed":""}`} onKeyDown={this.handleKeyJ} onAnimationEnd={() => this.setState({ j: false })}>j</button>
                    <button class={`k drum ${k? " pressed":""}`} onKeyDown={this.handleKeyK} onAnimationEnd={() => this.setState({ k: false })}>k</button>
                    <button class={`l drum ${l? " pressed":""}`} onKeyDown={this.handleKeyL} onAnimationEnd={() => this.setState({ l: false })}>l</button>
                </div>
               
            </>
        )
    }

}

export default Drumkit;