const renderpage = (pagename) => {
    document.querySelector('#menu-mobile').style.height = '0'
    if (pagename === currentpage) return

    if (currentpage) {
        document.querySelector(`#${currentpage}`).classList.remove('current-page')
        document.querySelector(`#${currentpage}-link`).classList.remove('current-link')
        
        let elsleft   = document.querySelectorAll(`#${currentpage} .out-to-left`)
        let elsright  = document.querySelectorAll(`#${currentpage} .out-to-right`)
        let elstop    = document.querySelectorAll(`#${currentpage} .out-to-top`)
        let elsbottom = document.querySelectorAll(`#${currentpage} .out-to-bottom`)
    
        for (const element of  [...elsleft, ...elsright, ...elstop, ...elsbottom]) {
            element.classList.remove('in')
        }
    }

    document.querySelector(`#${pagename}-link`).classList.add('current-link')

    let elsleft  = document.querySelectorAll(`#${pagename} .out-to-left`)
    let elsright = document.querySelectorAll(`#${pagename} .out-to-right`)
    let elstop    = document.querySelectorAll(`#${pagename} .out-to-top`)
    let elsbottom = document.querySelectorAll(`#${pagename} .out-to-bottom`)

    for (const element of  [...elsleft, ...elsright, ...elstop, ...elsbottom]) {
        element.classList.add('in')
    }

    setTimeout(() => document.querySelector(`#${pagename}`).classList.add('current-page'), 1000)

    currentpage = pagename
    localStorage.setItem('currentpage', currentpage)
}

let currentpage = null

const expand = () => {
    const el = document.querySelector('#menu-mobile')
    el.style.height = el.style.height=='160px'?'0':'160px'
}

setTimeout(() => renderpage(localStorage.getItem('currentpage')??'home'), 500)