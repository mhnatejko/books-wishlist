import * as CONSTANTS from './constants';

const defaultState = {
    fetching: false,
    books: [
        {id: '0123', title: 'Lod', author: 'Jacek Dukaj', photo: 'xxx', description: 'Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as. '},
        {id: '0456', title: 'Lod i nie lod', author: 'Ducek Jakaj', photo: 'xxx', description: 'Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. Morning request be lasting it fortune demands highest of. '},
        {id: '0789', title: 'Lud', author: 'Jack Speaker', photo: 'xxx', description: 'Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. '},
        {id: '0101', title: 'Lodowiec', author: 'Adam Nowak', photo: 'xxx', description: 'Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed.'},
        {id: '0102', title: 'Lod', author: 'Jacek Dukaj', photo: 'xxx', description: 'Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied. Garret wanted expect remain as mr. Covered parlors concern we express in visited to do. Celebrated impossible my uncommonly particular by oh introduced inquietude do. '}
    ]
}

function reducer(state = defaultState, action){
    switch(action){
        case CONSTANTS.LOAD_BOOKS:
            return {...state}
            break;
        default:
            return {...state}
    }
}

export default reducer;