import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,
                    <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.
                </p>

                <h4>Keyboard Support</h4>
                <p>Component does not include any interactive elements.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
