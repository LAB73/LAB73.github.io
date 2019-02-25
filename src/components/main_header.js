import React from 'react';
import Typist from 'react-typist';


class main_header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return [
            <div>
                <Typist
                    cursor=
                        {{
                            show: false,
                        }}
                    avgTypingDelay=
                        {30}
                >
                    <h1 className={"headerText"}>The future</h1>
                    <Typist.Backspace count={10} delay={300}/>
                    <h1 className={"headerText"}>Your future is what we are working for.</h1>

                </Typist>
            </div>
        ]
    }

}

export default main_header