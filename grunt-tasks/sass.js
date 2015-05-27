/**
 * @author Bilal Cinarli
 */

module.exports = {
    dev : {
        options: {
            style: 'nested'
        },
        files  : {
            'assets/styles/styles.css': 'src/styles/styles.scss'
        }
    },
    dist: {
        options: {
            style    : 'compressed',
            sourcemap: 'none'
        },
        files  : {
            'assets/styles/styles.min.css': 'src/styles/styles.scss'
        }
    }
};