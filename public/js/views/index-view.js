const PageTransition = (url) => {
    const isChkExceptAnswer = document.getElementById('chkExceptAnswer').checked;

    if (isChkExceptAnswer) {
        url += "?isChkExceptAnswer=true"
    }
    window.location.href = url;
}