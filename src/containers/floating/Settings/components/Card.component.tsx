import { ReactNode } from 'react';
import { CardItem, CardItemLabel, CardItemLabelValue, CardItemLabelWrapper, CardItemTitle } from './Settings.styles';

export interface CardComponentProps {
    heading: string;
    labels: { labelText: ReactNode; labelValue: ReactNode }[];
}

export const CardComponent = ({ heading, labels }: CardComponentProps) => {
    return (
        <CardItem>
            <CardItemTitle>{heading}</CardItemTitle>
            {labels.map(({ labelText, labelValue }) => (
                <CardItemLabelWrapper key={`label-${labelText}`}>
                    <CardItemLabel>{labelText}:</CardItemLabel>
                    <CardItemLabelValue>{labelValue}</CardItemLabelValue>
                </CardItemLabelWrapper>
            ))}
        </CardItem>
    );
};
