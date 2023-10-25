getHead() {
    document.write(`
        <head>
            <link rel="stylesheet" href="style.css" />
            <link rel="icon" href="assets/favicon.ico" />
            <meta charset="utf-8" />
            <title>CalcVox - Goals</title>
        </head>
    `)
}

getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>CalcVox: <i>Bridging The Gap in Mathematics</i></h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="advisors.html">Our Advisors</a></li>
                    <li><a href="goals.html">Our Goals</a></li>
                    <li><a href="journals.html">Journals and Research Papers</a></li>
                    <li><a href="timeline.html">Project Timeline</a></li>
                </ul>
            </nav>
        </header>
	`)
}