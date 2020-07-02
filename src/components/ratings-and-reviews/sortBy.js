import React from 'react';

class SortBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSort: 'relevance'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            currentSort: e.target.value
        }, () => {
            this.props.onSelect(this.state.currentSort);
        });
    }

    render() {
        return(
            <div className='sort-by-container'>
                <label htmlFor="sort-by">Sort by </label>
                <select value={this.state.currentSort} onChange={e => this.handleChange(e)}name="sort" id="sort-by">
                    <option value="relevance">Relevance</option>
                    <option value="helpfulness">Helpfulness</option>
                    <option value="date">Most Recent</option>
                </select>
            </div>
        );
    }
}

export default SortBy;