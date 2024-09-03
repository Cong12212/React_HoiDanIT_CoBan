import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({

            showJob: !this.state.showJob
        })
    }

    handleDelete = (job) => {
        this.props.deleteJob(job)
    }

    render() {
        let { arrayJob } = this.props;
        let { showJob } = this.state;
        console.log('render prop form cha', this.props)
        console.log('arrayJob from cha', arrayJob)
        let a = '';
        return (
            <>
                {showJob === false &&
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                }
                {showJob &&
                    <>
                        <div>
                            <div className="fromFather">
                                {a = arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}
                                            &nbsp;
                                            <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;