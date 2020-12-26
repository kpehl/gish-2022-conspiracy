import React, {useEffect} from 'react';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;
    useEffect(() => {
        document.title = 'Kathleen Pehl - ' + currentSection
    }, [currentSection]);
    return (
        <nav>
            <ul className="flex-row">
            {sections.map((section) => (
                <li className={`mx-2 ${
                    currentSection === section && 'navActive'
                    }`} key={section}>
                <span
                    onClick={() => {
                    setCurrentSection(section)
                    }}
                >
                    {section}
                </span>
                </li>
            ))}
            </ul>
        </nav>
    );
}

export default Nav;