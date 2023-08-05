import React from 'react';
import Detail from "./Detail"
import { getLeetcode, getStudent } from '../services/studentService';

class LeetCodeDetailsScreen extends Detail {
    state = {
        details: {},
        student:{},
    }
    async componentDidMount() {
        const response = await getLeetcode(this.props.match.params.id);
        const {data: student} = await getStudent(this.props.match.params.id)
        this.setState({ details: response.data, student: student })
    }
    render() {
        const { details, student } = this.state
        return (
            <React.Fragment>
            {details.familiar_languages !== undefined && <div>  
            {details.familiar_languages !== 'Invalid Username' && <div className="screen">
                {this.titleHeading(`Leet Code Details Of ${student.student_id}`)}
                <div className="main-content">
                    {this.titleValue("Number Of Easy Level Problems Solved", details.easy)}
                    {this.titleValue("Number Of Medium Level Problems Solved", details.medium)}
                    {this.titleValue("Number Of Hard Level Problems Solved", details.hard)}
                    {this.titleValue("General Rank", details.general_rank)}
                    {this.titleValue("Familiar Programming Languages", details.familiar_languages)}
                    {details.participated_in_contests === false && <>{this.titleValue("Participated in contests", "NO")}</>}
                    {details.participated_in_contests === true && <>{this.titleValue("Contest Rank", details.contest_rank)}
                    {this.titleValue("Number Of Contests Participated", details.number_of_contests)}
                    {this.titleValue("Contest Rating", details.contest_rating)}</>}
                </div>
                    </div>}
            </div>}  
            {details.familiar_languages === 'Invalid Username' && <div className="screen">
                {this.titleHeading(`${this.props.match.params.id}'s Leet Code Username is Invalid`)}
                </div>}
            {details.familiar_languages === undefined && <div className="screen">
                {this.titleHeading(`Leet Code details will be updated soon...`)}
            </div>}
            </React.Fragment>
        );
    }
}

export default LeetCodeDetailsScreen;