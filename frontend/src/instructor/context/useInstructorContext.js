import { useContext } from 'react';
import { InstructorContext } from './InstructorContext';

export const useInstructorContext = () => {
    const context = useContext(InstructorContext);
    if (!context) {
        throw new Error('useInstructorContext must be used within an InstructorProvider');
    }
    return context;
};

export default useInstructorContext;