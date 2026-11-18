import {Component, computed, input, signal} from '@angular/core';
import {AdydNavTab} from '../../../../../.yalc/components/projects/components/src/lib/adyd-nav-tab/adyd-nav-tab';
import {AdydTab} from '../../../../../.yalc/components/projects/components/src/lib/adyd-nav-tab/adyd-tab';
import {RouterModule} from '@angular/router';
import {CardItem} from '../../../../../.yalc/components/projects/components/src/lib/model/card-item';
import {AdydForm} from '../../../../../.yalc/components/projects/components/src/lib/adyd-form/adyd-form';
import {
  AdydImgEditable
} from '../../../../../.yalc/components/projects/components/src/lib/adyd-img-editable/adyd-img-editable';
import {FormlyFieldConfig, FormlyModule} from "@ngx-formly/core";
import {AdydFormConfig} from '../../../../../.yalc/components/projects/components/src/lib/model/AdydFormConfig';
import {
  ApiApplicationsEnum
} from '../../../../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';
import {Campaign} from '../../../service/campaign/campaign.model';

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

  /** Resuelto por `getCampaignResolver` y enlazado por `withComponentInputBinding`. */
  public readonly campaign = input.required<Campaign>();

  public readonly selectedCampaignData = computed<CardItem>(() => {
    const campaign = this.campaign();
    return {
      id: campaign.id,
      url: campaign.imageUrl ?? '',
      title: campaign.name,
      description: campaign.description ?? campaign.name
    };
  });
  protected readonly showButtons = signal<boolean>(false);
  public readonly formData = this.summaryCampaign();
  public readonly initialModel = computed<Record<string, unknown>>(() => {
    const campaign = this.campaign();
    return {
      campaignId: campaign.id,
      name: campaign.name,
      description: campaign.description ?? ''
    };
  });
  protected readonly saveConfig = signal<AdydFormConfig>({
    api: ApiApplicationsEnum.CAMPAIGN,
    operationId: 'updateCampaign'
  });

  private summaryCampaign(): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
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
