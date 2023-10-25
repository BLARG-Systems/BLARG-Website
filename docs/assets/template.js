getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <Title>BLARG! Systems</Title>
    `)
}

getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>BLARG! Systems: <i>Approaching expectations.</i></h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="advisors.html">Advisor Committee</a></li>
                    <li><a href="objectives.html">Weekly Objectives</a></li>
                    <li><a href="journals.html">Journals and Research Papers</a></li>
                    <li><a href="timeline.html">Project Timeline</a></li>
                </ul>
            </nav>
        </header>
	`)
}