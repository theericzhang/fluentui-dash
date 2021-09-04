import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';

const cards = [
    {
        title: 'Balance',
        amount: '$20,121',
        icon: 'Money',
        percentage: '10.2',
    },
    {
        title: 'Expenses',
        amount: '$10,121',
        icon: 'PaymentCard',
        percentage: '5',
    },
    {
        title: 'Income',
        amount: '$40,121',
        icon: 'Savings',
        percentage: '20',
    },
]

const Cards = () => {
    initializeIcons();
    return (
        <div>
            {cards.map((card) => (
                <div className="ms-Grid-col ms-sm-3 ms-xl-3">
                    <Card>
                        <Card.Section>
                            <Card.Item>
                                <i className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                                <Text>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text>{card.amount}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text>{card.percentage}%</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Cards;