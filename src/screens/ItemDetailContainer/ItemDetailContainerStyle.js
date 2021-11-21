export const itemDetailContainerStyle = theme => {
    return ({
        linearPro:{
            width: '100%'
        },
        container:{
            marginTop: '115px',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#a6b7d7',
            '& > div > img':{
                margin: '20px 25px 0 0',
                filter: 'drop-shadow(5px 5px 10px #444)',
            },
            '& > div > h3':{
                marginTop: '140px'
            },
        },
        
    })
}