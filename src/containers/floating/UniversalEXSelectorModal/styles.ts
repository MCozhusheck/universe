import styled from 'styled-components';
import { Typography } from '@app/components/elements/Typography.tsx';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: max(200px, 40vw);
`;
export const HeaderSection = styled.div`
    display: flex;
    padding: 30px 30px 20px;
    flex-direction: column;
    gap: 15px;
`;
export const Heading = styled(Typography).attrs({ variant: 'h4' })`
    line-height: 1.2;
    letter-spacing: -1px;
`;

export const MainLogoContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const MainLogoImage = styled.img`
    width: 100%;
`;

export const MainLogoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    padding: 20px;
    gap: 10px;
`;

export const MainLogoBottomRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`;

export const MainLogoTitle = styled(Typography).attrs({ variant: 'h1' })`
    text-transform: uppercase;
    background: linear-gradient(90deg, #ffd231 0%, #ffe37c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Fugaz One', sans-serif;
`;

export const MainLogoDescription = styled(Typography).attrs({ variant: 'p' })`
    font-weight: 600;
    max-width: 50%;
`;
