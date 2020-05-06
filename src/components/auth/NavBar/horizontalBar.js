import React from 'react'


const horizontalBar = props => {
    return(
        <div style={styles.head}>
            <div>Dashboard</div>
            <div>Create Project</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
        </div>
    ); 
};

const styles = StyleSheet.create({
    head: {
        width: '100%',
        backgroundcolor: 'black',
        heigth: '5%',
        display: 'flex'
    }

});

export default horizontalBar; 