export const navBarStyle = theme => {
    return ({
        containerNav:{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#e38a6f',
            '& > a > img':{
            },
            '& > div > a':{
                fontFamily: 'Josefin Sans',
                fontSize: '1.6em',
                color: 'black',
                marginRight: '20px',
                textDecoration: 'none',
            }
        },
        logo: {
            marginRight: '50px',
        }
    })
}