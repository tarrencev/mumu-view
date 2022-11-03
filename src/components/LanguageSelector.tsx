import i18next from "i18next";
import React, {useState} from "react";
import styles from "../../styles/LanguageSelector.module.css";

const LanguageSelector = () => {

    const [currLang, setCurrLang] = useState<string>('en')

    function buttonStyle (lang) {
        // impurity by dependency: currLang

        let button_style = {
            height:'1.5rem',
            border: '1px solid #333333',
            borderRadius: '3px'
        }

        if (lang == currLang) {
            return {...button_style, backgroundColor:'#FFFE71'}
        }
        else {
            return button_style
        }
    }

    return (
        <div className={styles.wrapper}>

            <button style={buttonStyle('en')} onClick={() => {
                i18next.changeLanguage("en");
                setCurrLang ('en');
            }}>English</button>

            <button style={buttonStyle('cn')} onClick={() => {
                i18next.changeLanguage("cn");
                setCurrLang ('cn');
            }}>中文</button>

        </div>
    );
};

export default LanguageSelector;