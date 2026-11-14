import {Component, computed, signal} from '@angular/core';
import {AdydNavTab} from '../../../../../.yalc/components/projects/components/src/lib/adyd-nav-tab/adyd-nav-tab';
import {AdydTab} from '../../../../../.yalc/components/projects/components/src/lib/adyd-nav-tab/adyd-tab';
import {RouterModule} from '@angular/router';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';
import {AdydForm} from '../../../../../.yalc/components/projects/components/src/lib/adyd-form/adyd-form';
import {
  AdydImgEditable
} from '../../../../../.yalc/components/projects/components/src/lib/adyd-img-editable/adyd-img-editable';
import {FormlyFieldConfig, FormlyModule} from "@ngx-formly/core";

@Component({
  imports: [
    AdydNavTab,
    AdydTab,
    RouterModule,
    AdydForm,
    AdydImgEditable,
    FormlyModule
  ],
  selector: 'adyd-campaign-detail',
  styleUrl: './adyd-campaign-detail.css',
  templateUrl: './adyd-campaign-detail.html',
})
export class AdydCampaignDetail {

  public readonly selectedCampaignData = computed<CardItem>(() => {
    const state = history.state as { payLoadData?: { cardData?: CardItem } } | null;
    const cardData = state?.payLoadData?.cardData;
    if (!cardData) {
      throw new Error('No se recibió cardData en el estado de navegación');
    }
    return cardData;
  });
  protected readonly showButtons = signal<boolean>(false);
  public readonly formData = this.summaryCampaign();
  public initialModel : Record<string, any> = {}

  private summaryCampaign(): FormlyFieldConfig[] {
    return [
      {
        key: 'title',
        type: 'input',
        props: {
          label: 'Campaign Title',
          disabled: true,
          required: true,
        },
      },
      {
        key: 'description',
        type: 'input',
        props: {
          label: 'Campaign Description',
          required: true,
          disabled: true,
        }
      }
    ];
  }
}
