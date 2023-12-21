import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps,} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {theme} from "@/theme/theme";
import {Box} from "@mui/material";
import {DoctorT} from "@/types/doctorT";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters
                  elevation={0}
                  square {...props} />
))(() => ({
    marginBottom: '1rem',
    borderRadius: '10px',
    boxShadow: '0px 2px 6px 0px #e1e1e1',
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{
            fontSize: '1.1rem', transform: 'scaleX(-1)', color: theme.palette.primary.main
        }}/>}
        {...props}
    />
))(() => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

type Props = {
    paramData: DoctorT
}
export default function CustomizedAccordions({paramData}: Props) {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Box sx={{marginBottom: '2rem'}}>
            <Accordion expanded={expanded === 'panel1'}
                       onChange={handleChange('panel1')}
            >
                <AccordionSummary aria-controls="panel1d-content"
                                  id="panel1d-header">
                    <Typography sx={{color: theme.palette.text.primary}}>درباره پزشک</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: theme.palette.text.primary}}>
                        {paramData?.about}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'}
                       onChange={handleChange('panel2')}
                       sx={{
                           '&:before': {
                               display: 'none'
                           }
                       }}
            >
                <AccordionSummary aria-controls="panel2d-content"
                                  id="panel2d-header">
                    <Typography sx={{color: theme.palette.text.primary}}>تحصیلات</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: theme.palette.text.primary}}>
                        {paramData?.education}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'}
                       onChange={handleChange('panel3')}
                       sx={{
                           '&:before': {
                               display: 'none'
                           }
                       }}
            >
                <AccordionSummary aria-controls="panel3d-content"
                                  id="panel3d-header">
                    <Typography sx={{color: theme.palette.text.primary}}>تجربیات و دستاوردها</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: theme.palette.text.primary}}>
                        {paramData?.experienceList}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
