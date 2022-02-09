import useLocalStorage from './useLocalStorage'

const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(value);
    return [darkMode, setDarkMode];
}

export default useDarkMode;