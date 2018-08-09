//@ts-check

(function (W, D) {

    const resize = (elem) => {

        const parentElem = elem.parentElement
        parentElem.style.position = 'relative'
        parentElem.style.whiteSpace = 'nowrap'
        parentElem.style.boxSizing = 'border-box'

        window.requestAnimationFrame(() => {
            const maxSizeFirstChild = elem.children[0]
            const maxSizeLastChild = elem.children[elem.children.length - 1]
            const parentComputedStyle = window.getComputedStyle(parentElem, null)
            const maxSizeOverflowWidth = maxSizeFirstChild.offsetLeft + maxSizeLastChild.offsetLeft + maxSizeLastChild.offsetWidth 
            const containerWidth =  parentElem.offsetWidth - parseFloat(parentComputedStyle.getPropertyValue('padding-right')) - parseFloat(parentComputedStyle.getPropertyValue('border-right-width'))

            if (containerWidth < maxSizeOverflowWidth) {
                var scale = (containerWidth / maxSizeOverflowWidth)
                elem.style.transform = `scale(${scale}, 1)`
                elem.style.transformOrigin = '0 0'
            }

        })
    }

    const sizers = D.querySelectorAll('.max-size')
    sizers.forEach(resize)

})(window, document)