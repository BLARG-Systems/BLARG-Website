function getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <Title>BLARG! Systems</Title>
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
                    <li><a href="/advisors">Advisor Committee</a></li>
                    <li><a href="/objectives">Weekly Objectives</a></li>
                    <li><a href="/journals">Journals</a></li>
                    <li><a href="/timeline">Project Timeline</a></li>
                </ul>
            </nav>
        </header>
	`)
}


function getFooter() {
    document.write(`
        <footer>
            <p>Copyright &copy; 2023, BLARG! Systems. All rights reserved.</p>
        </footer>
    `)
}