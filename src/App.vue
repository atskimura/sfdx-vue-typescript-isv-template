<template>
  <article class="slds-card">
    <div class="slds-page-header">
      <div class="slds-page-header__row">
        <div class="slds-page-header__col-title">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container slds-icon-custom-custom33" title="会議室">
                <img class="slds-icon slds-page-header__icon" src="~@salesforce-ux/design-system/assets/icons/custom/custom33.svg">
                <span class="slds-assistive-text">会議室</span>
              </span>
            </div>
            <div class="slds-media__body">
              <div class="slds-page-header__name">
                <div class="slds-page-header__name-title">
                  <h1>
                    <span>会議室</span>
                    <span class="slds-page-header__title slds-truncate" title="すべての会議室">すべての会議室</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <div class="slds-tabs_default">
        <ul class="slds-tabs_default__nav" role="tablist">
          <router-link to="/" class="slds-tabs_default__item" exact-active-class="slds-is-active">
            <a class="slds-tabs_default__link">Home</a>
          </router-link>
          <router-link to="/about" class="slds-tabs_default__item" exact-active-class="slds-is-active">
            <a class="slds-tabs_default__link">About</a>
          </router-link>
        </ul>
        <div class="slds-tabs_default__content">
          <router-view/>
        </div>
      </div>
    </div>
  </article>
</template>
