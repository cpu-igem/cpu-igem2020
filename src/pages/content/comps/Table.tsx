import React from 'react';
import './css/Link.scss';
import { locaCtrl } from '@/event/loca-ctrl';
import './css/Table.scss'
import H2 from '../comps/TRH2';
import { Link } from '../comps/Link'

interface item {
    url: string,
    text: string
}

interface ITableProps {
    caption: string,
    titles: string[],
    items: item[][],
    widthSize?:string,
}


export const Table: React.FC<ITableProps> = props => {

    return (<>
        <div id='wrapper' style={{
            width:props.widthSize || '100%'
        }}>
            <H2>{props.caption}</H2>
            <table id="keywords">
                <thead>
                    <tr>
                        {props.titles.map((item, i) => (
                            <th><span>{item}</span></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, i) => (
                        <tr>
                            {item.map((item, i) => (
                                <td>
                                    {item.url === '' ? <>{item.text}</> : <><Link href={item.url}>{item.text}</Link></>}

                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>)
}