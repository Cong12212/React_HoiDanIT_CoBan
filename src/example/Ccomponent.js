import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Ccomponent extends React.Component {
    state = {
        // firtName: '',
        // lastName: '',
        arrayJob: [
            { id: 'job1', title: 'dev', salary: '500$' },
            { id: 'job2', title: 'dev', salary: '500$' },
            { id: 'job3', title: 'dev', salary: '500$' },
        ]
    }
    addNewJob = (job) => {
        console.log('>>>get From AddComponet', job)
        this.setState({
            arrayJob: [...this.state.arrayJob, job]
        }
        )

    }

    deleteJob = (job) => {
        let currentJob = this.state.arrayJob;
        currentJob = currentJob.filter(item => item.id != job.id)
        this.setState({
            arrayJob: currentJob
        })
    }


    render() {
        return (
            <>
                <div>
                    <AddComponent
                        addNewJob={this.addNewJob}
                    />
                </div>
                <div>
                    < ChildComponent
                        // firtName={this.state.firtName}
                        // lastName={this.state.lastName}
                        arrayJob={this.state.arrayJob}
                        deleteJob={this.deleteJob}
                    >
                    </ChildComponent>
                </div >

            </>
        )
    }
}
export default Ccomponent;