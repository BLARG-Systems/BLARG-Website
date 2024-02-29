function getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <title>BLARG! Systems</title>
        <meta content="BLARG! Systems" property="og:title" />
        <meta name="description" content="BLARG! is a new compiled programming language aimed to explore a deeper understanding of Computer Science." />
        <meta name="keywords" content="BLARG!, Blarg, Programming, Language, C" />
        <meta name="author" content="BLARG! Developers">
        <meta property="og:title" content="BLARG! Systems" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://blargsys.com" />
        <meta property="og:image" content="https://blargsys.com/assets/logo.png" />
        <meta property="og:description" content="BLARG! is a new compiled programming language aimed to explore a deeper understanding of Computer Science." />
        <meta name="theme-color" content="#4e6ab8">
    `)
}

function getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>BLARG! Systems
                    <br> 
                    <i>Approaching expectations.</i>
                </h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/objectives">Weekly Objectives</a></li>
                    <li><a href="/journals">Journals</a></li>
                    <li><a href="/timeline">Timeline</a></li>
                    <li><a href="/repositories">Repositories</a></li>
                    <li><a href="/bibliography">Bibliography</a></li>
                </ul>
            </nav>
        </header>
	`)
}


function getFooter() {
    document.write(`
        <footer>
            <p>Copyright &copy; 2024, BLARG! Systems. All rights reserved.</p>
        </footer>
    `)
}