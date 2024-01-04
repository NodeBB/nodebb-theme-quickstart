<div class="acp-page-container">
	<!-- IMPORT admin/partials/settings/header.tpl -->

	<div class="row m-0">
		<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
			<form role="form" class="harmony-settings">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="enableQuickReply" name="enableQuickReply" />
					<label for="enableQuickReply" class="form-check-label">[[themes/harmony:settings.enableQuickReply]]</label>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="centerHeaderElements" name="centerHeaderElements" />
					<label for="centerHeaderElements" class="form-check-label">[[themes/harmony:settings.centerHeaderElements]]</label>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="mobileTopicTeasers" name="mobileTopicTeasers" />
					<label for="mobileTopicTeasers" class="form-check-label">[[themes/harmony:settings.mobileTopicTeasers]]</label>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="stickyToolbar" name="stickyToolbar" />
					<div for="stickyToolbar" class="form-check-label">
						[[themes/harmony:settings.stickyToolbar]]
						<p class="form-text">
							[[themes/harmony:settings.stickyToolbar.help]]
						</p>
					</div>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="autohideBottombar" name="autohideBottombar" />
					<div for="autohideBottombar" class="form-check-label">
						[[themes/harmony:settings.autohideBottombar]]
						<p class="form-text">
							[[themes/harmony:settings.autohideBottombar.help]]
						</p>
					</div>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="openSidebars" name="openSidebars" />
					<label for="openSidebars" class="form-check-label">[[themes/harmony:settings.openSidebars]]</label>
				</div>
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input" id="chatModals" name="chatModals" />
					<div for="chatModals" class="form-check-label">
						[[themes/harmony:settings.chatModals]]
					</div>
				</div>
			</form>
		</div>

		<!-- IMPORT admin/partials/settings/toc.tpl -->
	</div>
</div>
