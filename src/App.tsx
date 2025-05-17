import { useTheme } from './Context';
import { useState } from 'react';
import { data } from './data';
import './styles.css';
import { ThemeProvider } from './Context';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <div className={`app app_${currentTheme}`}>
                <button onClick={changeTheme}>Toggle theme</button>
                <List data={data} />
            </div>
        </ThemeProvider>
    );
}

function List({ data }: { data: { id: number; name: string }[] }) {
    return (
        <div>
            {data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem({ caption }: { caption: string }) {
    const theme = useTheme();
    const className = `listItem listItem_${theme}`;
    return <div className={className}>{caption}</div>;
}
