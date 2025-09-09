import styled from 'styled-components';

export const ColorBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
`;

export const ColorPreview = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 150px;
  height: 50px;
  border-radius: 5px;
`;

export const ColorLabel = styled.p`
  font-size: 14px;
  margin: 5px 0;
  font-weight: bold;
`;

export const ColorValue = styled.p`
  font-size: 8px;
  margin: 0;
`;

export const GradientGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const GradientBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const GradientPreview = styled.div<{ gradient: string }>`
  background: ${({ gradient }) => gradient};
  width: 180px;
  height: 80px;
  border-radius: 8px;
`;

export const GradientLabel = styled.p`
  font-size: 14px;
  margin: 5px 0;
  font-weight: bold;
`;

export const GradientValue = styled.p`
  font-size: 8px;
  margin: 0;
`;
