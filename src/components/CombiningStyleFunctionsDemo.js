import * as React from 'react';
import styled from '@emotion/styled';
import { palette, spacing } from '@mui/system';

const Div = styled.div`
  ${palette}
  ${spacing}
`;

export default function CombiningStyleFunctionsDemo() {
  return (
    <Div color="white" bgcolor="palevioletred" p={1}>
      <p>Styled components</p>
    </Div>
  );
}