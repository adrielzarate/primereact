import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Skeleton uses <i>aria-hidden</i> as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a
                    container, you may use <i>aria-busy</i> on the container element as well to indicate the loading process.
                </p>

                <h4>Keyboard Support</h4>
                <p>Component does not include any interactive elements.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
